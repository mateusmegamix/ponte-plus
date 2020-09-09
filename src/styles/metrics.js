import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    defaultPadding: 20,
    defaultFontSizeTxt: 14,
    defaultLineHeightTxt: 18,
    defaultFontSizeTitle: 16,
    defaultFontSizeIcon: 32,
    defaultFontSizeTitleRegulamento: 20,
    widthButton: 300,
    heightButton: 41,
    fontButton: 16,
    fontpIos: 14,
    fontp: 16,
    defaulth1: 22,
    defaulth2: 20,
    defaulth3: 18,
    defaulth4: 14,
    defaultWidthFull: '100%',
    defaultWidthPag: '93%',
    defaultWidthModal: '80%',
    modalWidth: '70%',
    defaultFontSizeBtnTop: 12,

    defaultTextAlignTitle: 'center',
    defaultFontWeightTitle: 'bold',
    defaultMarginTopTitle: 20,
    defaultMarginBottomTitle: 20,
    defaultPontosLista: 30,


    defaultHeightButton: 40,

    // Header Título
    
    headerTitulo: {
        height: 60
    },

    // Buttons List Beneficios

    btnListBeneficios: {
        width: '90%',
        height: 40,
    },

    // Buttons Inicial

    btnSobre: {
        width: '40%',
        height: 40
    },
    
    // Buttons Menu Lateral

    btnMenu: {
        width: '45%',
        height: 40
    },

    // TabBottom Bar

    tabBottom: {
        
        labelLoja: 'PONTE PLUS',
        iconWidth: 24,
        iconHeight: 25,
        fontTabBarAndroid: 10,
        fontTabBarIOS: 8,
    },

    // Meu Perfil
    meuPerfil: {
        btnWidth: '85%'
    }
};

export default metrics;