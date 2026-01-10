import TerminalIcon from "@mui/icons-material/Terminal";

const Showcase = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <div className="inline-flex items-center justify-center px-3 py-1 bg-(--bg-secondary) text-(--text-primary) text-sm gap-2 rounded-full">
          <TerminalIcon fontSize="small" />
          <span>Built with Modern Web Technologies</span>
        </div>
        <h1 className="text-6xl font font-semibold mt-8 text-(--text-primary)">Under the Hood</h1>
        <p className="inline-flex max-w-4xl mt-6 text-xl text-(--text-secondary)">A deep dive into the technical architecture, libraries, and design patterns that power this platform. Built for performance, scalability, and developer experience.</p>
        {/* <p className="mt-1 text-xl text-(--text-secondary)">Built for performance, scalability, and developer experience.</p> */}
      </div>
    </div>
  );
};

export default Showcase;
