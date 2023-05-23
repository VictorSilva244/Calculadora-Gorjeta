import { useState } from "react"
import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
import { 
    ContaContainer, 
    InputContainer,
    Label, 
    MainContainer,
    ButtonsContainer, 
    PorcentagemContainer,
    PessoasContainer
} from "./Calculadora.styles"
import { Resultados } from "./Resultados"

export function Calculadora(){
    const[conta, setConta] = useState(0)
    const[pessoas, setPessoas] = useState(0)
    const[porcentagem, setPorcentagem] = useState(0)


    function handleMudarValorConta(event){
        setConta(Number(event.target.value))
        
    }

    function handleMudarQuantidadePessoas(event){
        setPessoas(Number(event.target.value))
    }

    function  handleMudarPorcentagem(event, numero){

    }

    return(
        <MainContainer>
            
            <form action="">
                <ContaContainer>
                    
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer>
                        <img src={cifrao} alt="" />
                        <input type="number" id="bill" placeholder="0" onChange={handleMudarValorConta}/>
                    </InputContainer>
                </ContaContainer>

                <PorcentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a Porcentagem %</Label>
                    <ButtonsContainer>
                        <input type="button" value="5%"  onClick={() => handleMudarPorcentagem(0,5)}/>
                        <input type="button" value="10%" onClick={() => handleMudarPorcentagem(0,10)}/>
                        <input type="button" value="15%" onClick={() => handleMudarPorcentagem(0,15)}/>
                        <input type="button" value="25%" onClick={() => handleMudarPorcentagem(0,25)}/>
                        <input type="button" value="50%" onClick={() => handleMudarPorcentagem(0,50)} />
                        <input type="number" id="custom-tip" placeholder="Outro" onChange={handleMudarPorcentagem} />
                    </ButtonsContainer>
                </PorcentagemContainer>

                <PessoasContainer>
                    <Label htmlFor="people">Número de Pessoas</Label>
                        <InputContainer>
                            <img src={pessoa} alt="" />
                            <input type="number" id="people" placeholder="0"  onChange={handleMudarQuantidadePessoas}/>
                        </InputContainer>
                </PessoasContainer>
            </form>

            <Resultados/>
        </MainContainer>
    )
}