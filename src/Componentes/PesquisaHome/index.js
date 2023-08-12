import VideoList from "../VideoList";

export default function Pesquisa({ dado }){

    const filtrado = dado.filter((dados) => dados.data.includes("06/2023") || dados.data.includes("08/2023"))
    return(

        <>
            <VideoList dados={filtrado} />
        </>
    );
}