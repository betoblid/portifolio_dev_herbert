import VideoList from "../VideoList";

const data = new Date()
const m = data.getMonth()
const y = data.getFullYear()

export default function Pesquisa({ dado }){


    const filtrado = dado.filter((dados) => dados.data.includes(`${m + 1}/${y}`) || dados.data.includes(`${m - 1}/${y}`) || dados.data.includes(`${m}/${y}`))
    return(

        <>
            <VideoList dados={filtrado} />
        </>
    );
}