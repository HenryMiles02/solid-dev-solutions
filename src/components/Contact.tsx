import { useState, type FormEvent } from "react";
import Assets from "../assets/assets";
import emailjs from "@emailjs/browser";
import Button from "./ui/Button";


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [bugdetRange, setBugdetRange] = useState('')
    const [mensage, setMensage] = useState('')

    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (name === '' || email === '' || bugdetRange === '' || mensage === '') {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            name: name,
            email: email,
            bugdet_range: bugdetRange,
            mensage: mensage,
        };

        emailjs
            .send(
                "service_16yiymq",
                "template_039f7tp",
                templateParams,
                "WrVdCo_djdQQX1n19"
            )
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);

                setName('');
                setEmail('');
                setBugdetRange('');
                setMensage('');
            })
            .catch((err) => {
                console.log("ERRO: ", err);
            });
    }


    return (
        <section id="contact" className="w-full flex flex-col md:flex-row items-center justify-center py-20 max-sm:px-6 sm:px-10 xl:px-24 gap-8">
            <div className="flex flex-col flex-1/2 gap-8">
                <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">Pronto para construir <br /> <span className="text-gradient-accent">Algo sólido?</span></h2>
                <p className="text-lg sm:text-xl text-secondary">
                    Quer você tenha uma ideia completamente formada ou apenas um conceito, estamos prontos para ajudá-lo a torná-la realidade. Envie-nos uma mensagem e vamos começar a conversar.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-4">
                        <div className="p-2 h-10 w-10 bg-secondary/50 rounded-full flex items-center justify-center border-1 border-blue-500/30">
                            <Assets.Icons.Email className="w-5 h-5 text-blue-500 stroke-[2.5]" />
                        </div>
                        <p className="text-center max-w-2xl text-lg sm:text-xl text-gray-300">
                            soliddev@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="p-2 h-10 w-10 bg-secondary/50 rounded-full flex items-center justify-center border-1 border-blue-500/30">
                            <Assets.Icons.Pin className="w-5 h-5 text-blue-500 stroke-[2.5]" />
                        </div>
                        <p className="text-center max-w-2xl text-lg sm:text-xl text-gray-300">
                            Florianópolis, SC - Brazil
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1/2 bg-secondary p-8 rounded-xl border border-glass gap-8">
                <form 
                    className="space-y-6" 
                    onSubmit={ sendEmail } 
                    method="post" 
                >
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400">Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-slate-800/50 border border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-700 transition-all" 
                                placeholder="John Doe" 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400">Email</label>
                            <input 
                            type="email" 
                            className="w-full bg-slate-800/50 border border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-700 transition-all" 
                            placeholder="john@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} 
                        />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400">Faixa de Orçamento</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-800/50 border border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-700 transition-all" 
                            placeholder="5K - 10K"
                            onChange={(e) => setBugdetRange(e.target.value)}
                            value={bugdetRange} 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400">Message</label>
                        <textarea 
                            rows={4} 
                            className="w-full bg-slate-800/50 border border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-700 transition-all" 
                            placeholder="Conte sobre seu projeto..."
                            onChange={(e) => setMensage(e.target.value)}
                            value={mensage}
                        ></textarea>
                    </div>
                    <Button 
                        className="w-full py-4"
                        variant={"secondary"}
                        type="submit"
                    >
                    Enviar Mensagem
                    </Button>
                </form>
            </div>
        </section>
    )
}