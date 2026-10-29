import { jobs } from "../../../lib/jobs.js";

export async function GET(request, { params }) {
  const { id } = await params;
  const jobId = Number(id);

  if (!Number.isInteger(jobId) || jobId <= 0) {
    return Response.json(
      { message: "Invalid job ID" },
      { status: 400 }
    );
  }

  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return Response.json(
      { message: "Job not found" },
      { status: 404 }
    );
  }

  return Response.json(job);
}