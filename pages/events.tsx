import Event from "../components/Events/Event";

const events = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="w-full min-h-[100vh]">
        <Event />
      </div>
    </div>
  );
};

export default events;
