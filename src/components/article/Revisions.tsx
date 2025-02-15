
import { useRevisions,useRevertRevision } from "@/lib/hooks/useRevisions";
import React from "react";

import { toast } from "react-toastify";
interface RevisionsProps {
  articleId: number;
  isAdmin: boolean;
}

const Revisions: React.FC<RevisionsProps> = ({ articleId, isAdmin }) => {
  const { data: revisions, isLoading, error } = useRevisions(articleId);
  const revertMutation = useRevertRevision();

  const handleRevert = async (revisionId: number) => {
    try {
      await revertMutation.mutateAsync({ articleId, revisionId });
      toast.success("Article reverted successfully!");
    } catch (err) {
      toast.error("Failed to revert article");
    }
  };

  if (isLoading) return <p>Loading revisions...</p>;
  if (error) return <p>Error loading revisions</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Revision History</h3>
      <ul className="space-y-2">
        {revisions?.map((revision) => (
          <li key={revision.id} className="p-2 border rounded-md">
            <p>
              <strong>Timestamp:</strong> {new Date(revision.created_at).toLocaleString()}
            </p>
            <p>
              <strong>Content:</strong> {revision.content.slice(0, 50)}...
            </p>
            {isAdmin && (
              <button
                onClick={() => handleRevert(revision.id)}
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
              >
                Revert
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Revisions;
