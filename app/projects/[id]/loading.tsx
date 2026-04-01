import { Nav } from "@/src/components/layout/Nav";
import { ProjectDetailSkeleton } from "@/src/features/projects/ProjectDetailSkeleton";

export default function ProjectDetailLoading() {
  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectDetailSkeleton />
    </main>
  );
}
