import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function index() {
  return (
    <div className="grid md:grid-cols-[20%_1fr] h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default index