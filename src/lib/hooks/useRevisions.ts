import apiClient from '@/repositories/apiClient';
import { useMutation, useQuery } from '@tanstack/react-query';

// Revision Type
export interface Revision {
  id: number;
  article_id: number;
  content: string;
  created_at: string;
}

// Fetch Revisions
export const useRevisions = (articleId: number) =>
  useQuery<Revision[]>(["revisions", articleId], async () => {
    const { data } = await apiClient.get(`/articles/${articleId}/revisions`);
    return data;
  });

// Fetch Single Revision
export const useRevision = (articleId: number, revisionId: number) =>
  useQuery<Revision>(["revision", articleId, revisionId], async () => {
    const { data } = await apiClient.get(
      `/articles/${articleId}/revisions/${revisionId}`
    );
    return data;
  });

// Revert to a Revision
export const useRevertRevision = () =>
  useMutation(async ({ articleId, revisionId }: { articleId: number; revisionId: number }) => {
    const { data } = await apiClient.post(
      `/articles/${articleId}/revisions/${revisionId}/revert`
    );
    return data;
  });
