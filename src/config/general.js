console.disableYellowBox = true;


const URL = 'https://www.pontueme.com.br';
// const URL = 'http://localhost:57475';
// const URL = 'http://138.97.105.194:126';  // homolog

export const appId = {
  name: 'ponteplus'
}

export const general = {
  URL,
  codCliente: 14,
  baseURL: URL + '/api',
  appName: 'Ponte Plus',
  nomeClienteFaleConosco: 'Ponte Plus',
  appId: 'ponteplus',
  Version_Android: '1.5',
  Version_IOS: '1.5',

  exibeCategoriaPontos: true,

  appNameIdApple: 'Ponte Plus',
  appStoreId: 11111, // configurar depois
  playStoreId: 'com.am4.ponteplus',

  imagemPerfil: URL+'/Conteudo/Clientes/'+appId.name+'/associados/',
  imagemLojas: URL+'/conteudo/clientes/'+appId.name+'/Lojas/',
  imagemNotificacoes: URL+'/conteudo/clientes/'+appId.name+'/Mensagens/',
  imagemBeneficio: URL+'/conteudo/clientes/'+appId.name+'/beneficios/',
  imagemBanners: URL+'/conteudo/clientes/'+appId.name+'/banners/',
  imagemMedalha: URL+'/conteudo/clientes/'+appId.name+'/categoriaspontos/',
  IDPagina_Regulamento: 3,
  IDPagina_SobreOPrograma: 7,
  IDPagina_SobreOPrograma_topo: 2,
  IDPagina_SobreOPrograma_recompensas: 5,
  IDPagina_SobreOPrograma_beneficios: 8

};


export default general;

export const UrlLogin = URL + '/api/token';
export const UrlAssociarFacebook = URL + '/';
export const UrlCadastroUsuario = URL + '/Api/Associados/CadastroComSenha';