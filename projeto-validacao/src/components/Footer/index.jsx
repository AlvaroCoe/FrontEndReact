import './style.css'

export default function Footer() {
return (
    <footer>
        <div className='footer'>
        <p>&copy; {new Date().getFullYear()} Projeto de Validação. Todos os direitos reservados.
            <br/>
            SENAI BA
        </p>
        </div>
    
    </footer>
    
    )
}