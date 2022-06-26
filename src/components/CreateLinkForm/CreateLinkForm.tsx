import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { debounce } from 'lodash';
import { nanoid } from 'nanoid';
import { NextPage } from 'next';
import { trpc } from '~/utils/trpc';
import { FaGithubAlt, FaSpinner, FaRandom } from 'react-icons/fa';
import Layout, { Icon } from '~/components/Layout';
import Loading from '~/components/Loading';
import {
  Form,
  IconButton,
  ErrorMessage,
  FormGroup,
} from './CreateLinkForm.styled';

type Form = {
  slug: string;
  url: string;
};

const CreateLinkForm: NextPage = () => {
  const [form, setForm] = useState<Form>({ slug: '', url: '' });
  const url = window.location.origin;

  const slugCheck = trpc.useQuery(
    ['short-link.slugCheck', { slug: form.slug }],
    {
      refetchOnReconnect: false, // replacement for enable: false which isn't respected.
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );
  const createSlug = trpc.useMutation(['short-link.createSlug']);

  const handleSlugChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({ ...form, slug: e.target.value });
    debounce(slugCheck.refetch, 100);
  };

  const handleUrlChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({ ...form, url: e.target.value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createSlug.mutate({ ...form });
  };

  const handleRandomSlugGen = () => {
    const slug = nanoid();
    setForm({ ...form, slug });
    slugCheck.refetch();
  };

  return (
    <Layout>
      <Icon>
        <FaGithubAlt />
      </Icon>

      <h1>Link Shortener</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <span>{url}/</span>
          <input
            type="text"
            placeholder="Slug..."
            value={form.slug}
            onChange={handleSlugChange}
          />
          <IconButton>
            <FaRandom color="#fff" size={14} onClick={handleRandomSlugGen} />
          </IconButton>
        </FormGroup>
        <FormGroup>
          <span>Link</span>
          <input
            type="text"
            placeholder="URL..."
            value={form.url}
            onChange={handleUrlChange}
          />
        </FormGroup>
      </Form>

      {createSlug.isError && <ErrorMessage>Something happened :c</ErrorMessage>}

      {createSlug.isLoading && (
        <Loading>
          <FaSpinner />
        </Loading>
      )}
    </Layout>
  );
};

export default CreateLinkForm;
