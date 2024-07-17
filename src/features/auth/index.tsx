import { ChangeEvent, FormEvent, useState } from "react";

import { postLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      username,
      password,
    };

    try {
      const response = await postLogin(payload);

      localStorage.setItem("token", response?.token as string);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen gap-2"
    >
      <label>Authentication</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="border border-gray-400 rounded-sm"
      />
      <input
        type="password"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        className="border border-gray-400 rounded-sm"
      />
      <button
        type="submit"
        className="bg-black text-white rounded-sm py-1 px-5"
      >
        Submit
      </button>
    </form>
  );
};

export default Authentication;
