import { useForm } from 'react-hook-form'
import './style.css'
import * as yup from 'yup'
import { toast } from 'react-toastify'
// Validação de formulário de cadastro de usuário
const esquemaDeCadastro = yup.object({

    nome: yup.
    string().required('O nome é obrigatório'),
    email: yup.
    string().email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
    senha: yup.
    string().min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
    confirmarSenha: yup.
    string()
    .oneOf([yup.ref('senha'), null], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória')

})
export default function CadastroPage() {
    //Configuração do formulário de cadastro de usuário
    const {
        register: registrarCampo,
        handleSubmit: lidarComEnvioDoFormulario,
        formState: { errors: errosDeValidacao, isSumitting: estaEnviandoFormulario },
        setError: definirErroNoCampo,
        reset: reiniciarFormulario
    } = useForm({
        resolver: yupResolver(esquemaDeCadastro),
        defaultValues: {
            nome: '',
            email: '',
            senha: '',
            confirmarSenha: ''
        }
    })
    
    async function enviarFormularioDeCadastro(dadosDoFormulario) {
        const dadosParaApi = {
            nome: dadosDoFormulario.nome,
            email: dadosDoFormulario.email,
            senha: dadosDoFormulario.senha
        }
        try {
            const resposta = await dadosParaApi.post('/usuarios', dadosParaApi)
            toast.success('Usuário cadastrado com sucesso!')
            reiniciarFormulario()
        }
        catch (error) {
            const codigoDeStatus = error.response?.status
            const mensagemDoServidor = error.response?.data?.mensagem ||
            'Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente mais tarde.'
            if (codigoDeStatus === 400){
                definirErroNoCampo('email', {
                    type: 'server',
                    message: mensagemDoServidor
                })
            }

            toast.error(mensagemDoServidor)
            console.error('Erro ao cadastrar usuário:', error)

        }
    }
    return (
        <div className='Cadastro-container'>
            <h1>Cadastro de Usuário</h1>
            <form noValidate onSubmit={lidarComEnvioDoFormulario(enviarFormularioDeCadastro)}>
                {/* Campo de nome */}
                <div className='form-group'>
                    <label htmlFor='nome'>Nome</label>
                    <input
                        id='nome'
                        type='text'
                        placeholder='Ex: João da Silva'
                        {...registrarCampo('nome')}
                        className={`form-control ${errosDeValidacao.nome ? 'is-invalid' : ''}`}
                    />
                    {errosDeValidacao.nome &&
                    (<p className='error-message'>{errosDeValidacao.nome.message}</p>
                    )}
                </div>

                {/* Campo de e-mail */}
                <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        {...registrarCampo('email')}
                        className={`form-control ${errosDeValidacao.email ? 'is-invalid' : ''}`}
                    />
                    {errosDeValidacao.email && (
                        <div className='invalid-feedback'>{errosDeValidacao.email.message}</div>
                    )}
                </div>

                {/* Campo de senha */}
                <div className='form-group'>
                    <label htmlFor='senha'>Senha</label>
                    <input
                        type='password'
                        id='senha'
                        {...registrarCampo('senha')}
                        className={`form-control ${errosDeValidacao.senha ? 'is-invalid' : ''}`}
                    />
                    {errosDeValidacao.senha && (
                        <div className='invalid-feedback'>{errosDeValidacao.senha.message}</div>
                    )}
                </div>

                {/* Campo de confirmação de senha */}
                <div className='form-group'>
                    <label htmlFor='confirmarSenha'>Confirmar Senha</label>
                    <input
                        type='password'
                        id='confirmarSenha'
                        {...registrarCampo('confirmarSenha')}
                        className={`form-control ${errosDeValidacao.confirmarSenha ? 'is-invalid' : ''}`}
                    />
                    {errosDeValidacao.confirmarSenha && (
                        <div className='invalid-feedback'>{errosDeValidacao.confirmarSenha.message}</div>
                    )}
                </div>

                {/* Botão de envio */}
                <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={estaEnviandoFormulario}
                >
                    {estaEnviandoFormulario ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    )
}