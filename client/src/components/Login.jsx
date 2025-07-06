import { useRef } from "react";
import { login } from "../../js/storage/storage";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const renderCadastro = () => {
    navigate("/register");
  };

  const loginUser = async (user, password) => {
    if (!user || !password) {
      //criar resposta na UX para o usuario saber o erro
      console.error("Campos devem ser preenchidos");
    } else {
      const data = await login(user, password);
      if (data.sucess) {
        navigate("/dashboard");
      }
    }

    userEmailRef.current.value = "";
    userPasswordRef.current.value = "";
  };

  return (
    <>
      <div className="m-auto mt-32 m-top w-82 h-64 bg-white">
        <h1 className=" text-4xl text-blue-600 font-bold flex justify-center p-4">
          Dashboard
        </h1>
        <div className="flex flex-col items-center align-middle gap-1 p-2">
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
              onClick={() => {
                loginUser(
                  userEmailRef.current.value,
                  userPasswordRef.current.value
                );
              }}
            >
              Entrar
            </button>
          </div>
          <span className="text-sm mt-1 p-2">
            <p>
              Primeiro acesso?
              <a className="font-bold underline" onClick={renderCadastro}>
                Cadastre-se
              </a>
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
