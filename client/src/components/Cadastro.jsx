import { useRef } from "react";
import { cadastro } from "../../js/storage/storage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Cadastro() {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const backToLogin = () => {
    navigate("/");
  };

  const registerDone = () =>
    toast.success(
      "Usuário cadastrado com sucesso...Voltando para a tela de login",
      {
        autoClose: 3000,
        pauseOnHover: false,
      }
    );
  const registerError = () =>
    toast.error("Erro ao cadastrar", {
      pauseOnHover: false,
    });

  const cadastrarUsuario = async (name, email, password) => {
    if (!name || !email || !password) {
      registerError();
    } else {
      const data = await cadastro(email, name, password);

      if (data.sucess) {
        registerDone();

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        registerError();
      }
    }

    userNameRef.current.value = "";
    userEmailRef.current.value = "";
    userPasswordRef.current.value = "";
  };

  return (
    <>
      <ToastContainer />
      <div className="m-auto mt-32 m-top w-82 h-76 bg-white">
        <h1 className=" text-4xl text-blue-600 font-bold flex justify-center p-4">
          Cadastre-se
        </h1>
        <div className="flex flex-col items-center align-middle gap-1 p-2">
          <input
            type="text"
            ref={userNameRef}
            placeholder="Nome"
            className="bg-white w-72 h-10 text-center border"
          />
          <input
            type="email"
            ref={userEmailRef}
            placeholder="E-mail"
            className="bg-white w-72 h-10 text-center border"
          />
          <input
            type="password"
            ref={userPasswordRef}
            placeholder="Senha"
            className="bg-white w-72 h-10 text-center border"
          />
          <div className="w-72 h-10 flex justify-center items-center align-middle">
            <button
              className="w-72 h-10 bg-blue-600 mt-2 text-white active:scale-96"
              onClick={() =>
                cadastrarUsuario(
                  userNameRef.current.value,
                  userEmailRef.current.value,
                  userPasswordRef.current.value
                )
              }
            >
              Cadastrar
            </button>
          </div>
          <span className="text-sm mt-1 p-2">
            <p>
              Já tem uma conta?
              <a className="font-bold underline" onClick={backToLogin}>
                Fazer login
              </a>
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
