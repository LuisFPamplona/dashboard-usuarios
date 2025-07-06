import { useNavigate, useSearchParams } from "react-router-dom";
import { deleteUser, getUsers } from "../../js/storage/storage.js";
import { use, useEffect, useState } from "react";
import { Trash2, UserRoundPen, UserRoundX } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();

  const removeSucess = () =>
    toast.success("Usuário deletado com sucesso", {
      autoClose: 3000,
      position: "bottom-center",
      pauseOnHover: false,
    });

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const renderUserList = async () => {
      const data = await getUsers();
      setUserList(data.data);
    };

    renderUserList();
  }, []);

  const disconnect = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const removeUser = async (id) => {
    await deleteUser(id);
    removeSucess();
    setUserList((prevList) => prevList.filter((user) => user.id !== id));
  };

  return (
    <>
      <ToastContainer />
      <header className=" top-0 h-10 bg-white w-full flex justify-end align-middle items-center pr-2">
        <button className="border w-12 active:scale-95" onClick={disconnect}>
          Sair
        </button>
      </header>
      <div className=" bg-white w-92 h-fit p-4 m-auto mt-12 text-center">
        <h1 className="m-auto text-4xl">Lista de usuários</h1>
        <ul>
          {userList.map((user) => (
            <div key={user.id}>
              <div className="flex flex-col border mb-4 mt-4 p-2 rounded-2xl text-left gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">{user.name}</span>
                  <div className="flex justify-end gap-2 scale-80">
                    <button className="border w-fit p-1 bg-orange-400 active:scale-95">
                      <UserRoundPen color="white" />
                    </button>
                    <button
                      className="border w-fit p-1 bg-red-400 active:scale-95"
                      onClick={() => {
                        removeUser(user.id);
                      }}
                    >
                      <Trash2 color="white" />
                    </button>
                  </div>
                </div>
                <span className="border flex gap-1">
                  <span className="bg-orange-300 w-14 text-center">ID</span>
                  <span>{user.id}</span>
                </span>

                <span className="border flex gap-1">
                  <span className="bg-orange-300 w-14 text-center">EMAIL</span>
                  <span>{user.email}</span>
                </span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
