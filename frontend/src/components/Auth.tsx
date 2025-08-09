import { useState } from "react";

export const Auth = ({type} : {type : "signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState({
        name : "",
        username : "",
        password : ""
    })
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                <div className="px-10">
                    <div className="text-3xl font-bold">
                        {type==="signup" ? "Create an account" : "Welcome back!"}
                    </div>
                    <div className="text-lg font-light mt-1 text-slate-400">
                         {type==="signup" ? "Already have an account ? " : "Don't have an account ? "}
                         <a href={type==="signup" ? "/signin" : "/signup"} className="text-blue-500 pl-2 underline">{type==="signup" ? "Login" : "Sign up"}</a>
                    </div>
                </div>
                <div className="pt-8">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null}
                    <LabelledInput label="Username" placeholder="Enter your username" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type="password" placeholder="Enter your password" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button type="button" className="text-white w-full mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{ type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
    )
}

function LabelledInput({label, placeholder, type, onChange} : {label: string, placeholder: string, type?: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
         <div>
            <label className="block mb-2 mt-3 text-sm font-medium text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} />
        </div>
    );
}

