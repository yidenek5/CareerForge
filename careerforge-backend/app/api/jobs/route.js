import { jobs } from "../lib/jobs.js";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Read search and pagination parameters
  const title = searchParams.get("title");
  const type = searchParams.get("type");
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);

  // Validate pagination values
  if (
    !Number.isInteger(page) ||
    !Number.isInteger(limit) ||
    page < 1 ||
    limit < 1 ||
    limit > 100
  ) {
    return Response.json(
      { message: "Invalid page or limit" },
      { status: 400 }
    );
  }

  // Filter jobs by title and type
  const filteredJobs = jobs.filter((job) => {
    const matchesTitle =
      !title || job.title.toLowerCase().includes(title.toLowerCase());

    const matchesType =
      !type || job.type.toLowerCase() === type.toLowerCase();

    return matchesTitle && matchesType;
  });

  // Calculate pagination indexes
  const start = (page - 1) * limit;
  const end = start + limit;

  // Get jobs for the requested page
  const paginatedJobs = filteredJobs.slice(start, end);

  // Return results and pagination information
  return Response.json({
    page,
    limit,
    totalJobs: filteredJobs.length,
    totalPages: Math.ceil(filteredJobs.length / limit),
    jobs: paginatedJobs,
  });
}