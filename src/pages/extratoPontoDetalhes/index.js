import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import images from '../../styles/images';
import colors from '../../styles/colors';
class extratoPontosDetalhes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const Date = data.Data
        const dataFormatada = moment(Date).format("DD/MM/YYYY")
        const bonusAcesso = {
            tipo: data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == 'BÔNUS POR ACESSO' || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO",
            image: images.cupomExtrato.icons.bonusAcesso
        }
        const aguardaValidacao = {
            tipo: data.Tipo == 'AGUARDANDO VALIDAÇÃO',
            image: images.cupomExtrato.icons.aguardaValidacao
        }
        const resgateRecompensa = {
            tipo: data.Tipo == 'RESGATE DE RECOMPENSA',
            image: images.cupomExtrato.icons.resgateRecompensa
        }
        const notaEstornada = {
            tipo: data.Tipo == 'NOTA ESTORNADA' || data.Tipo == 'RESGATE ESTORNADO',
            image: images.cupomExtrato.icons.notaEstornada
        }
        const notaRejeitada = {
            tipo: data.Tipo == 'NOTA REJEITADA' || data.Tipo == 'NOTA INVÁLIDA' || data.Tipo == 'PONTOS EXPIRADOS',
            image: images.cupomExtrato.icons.notaRejeitada
        }
        return (

            <View style={[styles.header, { marginTop: '10%' }]}>
                <Image
                    source={images.cupomExtrato.bgDetalhesCupom}
                    style={styles.imgTopo}
                />
                <View style={styles.header}>

                    <Text style={styles.title}>DETALHE DA OPERAÇÃO</Text>

                    {
                        aguardaValidacao.tipo
                            ? <Image
                                source={aguardaValidacao.image}
                                style={styles.logo}
                            />
                            : null
                    }

                    {
                        resgateRecompensa.tipo
                            ? <Image
                                source={resgateRecompensa.image}
                                style={styles.logo}
                            />
                            : null
                    }

                    {
                        bonusAcesso.tipo
                            ? <Image
                                source={bonusAcesso.image}
                                style={styles.logo}
                            />
                            : null
                    }

                    {
                        notaEstornada.tipo
                            ? <Image
                                source={notaEstornada.image}
                                style={styles.logo}
                            />
                            : null
                    }

                    {
                        notaRejeitada.tipo
                            ? <Image
                                source={notaRejeitada.image}
                                style={styles.logo}
                            />
                            : null
                    }
                    {
                        data.Tipo == 'NOTA CADASTRADA'
                            ? <Image
                                source={{ uri: data.LojaLogo }}
                                style={
                                    styles.logo
                                } />
                            : null
                    }

                    {
                        data.Tipo == 'NOTA CADASTRADA'
                            ? <Text style={styles.nameLoja}>{data.LojaNome}</Text>
                            :
                            <Text style={styles.nameLoja}>
                                {
                                    data.Tipo == 'BÔNUS POR ANIVERSÁRIO DO USUÁRIO' ?
                                        'BÔNUS DE ANIVERSÁRIO'
                                        :
                                        data.Tipo
                                }
                            </Text>

                    }
                </View>
                {
                    data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == 'NOTA REJEITADA' || data.Tipo == 'NOTA ESTORNADA' || data.Tipo == 'AGUARDANDO VALIDAÇÃO' || data.Tipo == 'RECOMPENSA RESGATADA' || data.Tipo == 'RESGATE DE RECOMPENSA' || data.Tipo == 'RESGATE DE RECOMPENSA' || data.Tipo == "BÔNUS POR ACESSO" || data.Tipo == 'NOTA INVÁLIDA' || data.Tipo == 'RESGATE ESTORNADO' || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "PONTOS EXPIRADOS"
                        ? <View>
                            <View style={styles.info}>
                                {
                                    data.Tipo == 'AGUARDANDO VALIDAÇÃO'
                                        ? <View style={styles.info}>
                                            <Text style={styles.txtInfo}>Data do Cadastro</Text>
                                            <Text style={styles.txtDestaque}>{dataFormatada}</Text>
                                        </View>
                                        : null
                                }{
                                    data.Tipo == 'NOTA REJEITADA' || data.Tipo == 'NOTA ESTORNADA' || data.Tipo == 'RESGATE ESTORNADO' || data.Tipo == 'NOTA INVÁLIDA' || data.Tipo == 'PONTOS EXPIRADOS'
                                        ? <View style={styles.info}>
                                            <Text style={styles.txtInfo}>{data.Tipo == 'PONTOS EXPIRADOS' ? "Pontos adquiridos em data" :

                                                data.Tipo == 'NOTA ESTORNADA' || data.Tipo == 'RESGATE ESTORNADO' ? 'Data do Estorno' : "Data do Cadastro da Nota"

                                            }</Text>
                                            <Text style={styles.txtDestaque}>{dataFormatada}</Text>
                                        </View>
                                        : null
                                }
                                {
                                    data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == 'RECOMPENSA RESGATADA' || data.Tipo == 'RESGATE DE RECOMPENSA' || data.Tipo == "BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO"
                                        ? <View style={styles.info}>
                                            {
                                                data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == "BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO"

                                                    ? <Text style={styles.txtInfo}>Data do Recebimento</Text>
                                                    : <Text style={styles.txtInfo}>Data do Resgate</Text>
                                            }
                                            <Text style={styles.txtDestaque}>{dataFormatada}</Text>
                                        </View>
                                        : null
                                }
                            </View>
                            {
                                data.Tipo == "PONTOS EXPIRADOS" ? <View style={styles.infoNone}></View>
                                    :
                                    data.Tipo == 'RECOMPENSA RESGATADA' || data.Tipo == 'RESGATE DE RECOMPENSA'
                                        ? <View style={styles.info}>
                                            <Text style={styles.txtDestaque}>{data.Descricao}</Text>
                                        </View>
                                        : <View style={styles.info}>
                                            {
                                                data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == "BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO"
                                                    ? <View style={{ alignItems: 'center' }}>
                                                        <Text style={styles.txtInfo}>Validade dos Pontos</Text>
                                                        <Text style={styles.txtDestaque}>{data.DataValidadePonto}</Text>
                                                    </View>
                                                    : <View>
                                                        {
                                                            data.Tipo == "NOTA ESTORNADA" || data.Tipo == 'RESGATE ESTORNADO' || data.Tipo == "NOTA INVÁLIDA" || data.Tipo == 'AGUARDANDO VALIDAÇÃO'
                                                                ?
                                                                data.Tipo == 'AGUARDANDO VALIDAÇÃO' ?
                                                                    <Text style={styles.txtInfoValidacao}>{"Aguarde, sua solicitação será validada."}</Text>
                                                                    : <Text style={styles.txtInfo}>{data.Tipo == "NOTA INVÁLIDA" ? "Motivo da não Validação" : "Motivo do Estorno"}</Text>

                                                                : <Text style={styles.txtInfoMensagem}>{data.Descricao}</Text>
                                                        }
                                                    </View>
                                            }
                                            <Text style={styles.txtDestaque}>{data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == 'PONTOS EXPIRADOS' || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" ? null : data.Descricao}</Text>
                                        </View>
                            }
                        </View>
                        : <View>
                            <View style={styles.info}>
                                <Text style={styles.txtInfo}>Data da compra</Text>
                                <Text style={styles.txtDestaque}>{data.DataFormatada}</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.txtInfo}>Valor da compra</Text>
                                <Text style={styles.txtDestaque}>{data.ValorNota}</Text>
                                {
                                    data.Liberado
                                        ? null
                                        : <Text style={styles.txtInfo}>Status:Cupom Válido</Text>
                                }
                            </View>
                            <View style={styles.infoT}>
                                <Text style={styles.txtInfo}>Validade dos Pontos</Text>
                                <Text style={styles.txtDestaque}>{data.DataValidadePonto}</Text>
                            </View>
                        </View>
                }


                <View style={[styles.footer,
                {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }
                ]}>
                    {

                        data.Tipo == 'RESGATE ESTORNADO' || data.Tipo == 'NOTA REJEITADA' || data.Tipo == 'NOTA INVÁLIDA' || data.Tipo == 'NOTA ESTORNADA' || data.Tipo == 'PONTOS EXPIRADOS'
                            ?
                            <View style={[styles.footerContainer,
                            {
                                backgroundColor: colors.cupomExtrato.bgFooterResgateEstornado,
                                borderTopColor: colors.cupomExtrato.rowColor,
                                borderTopWidth: 1,
                                position: 'relative',
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }
                            ]}>
                                {
                                    data.Tipo == 'NOTA INVÁLIDA'
                                        ? null
                                        : <View style={styles.vIcone}>

                                            {
                                                data.Tipo == 'NOTA ESTORNADA' || data.Tipo == 'RESGATE ESTORNADO' || data.Tipo == 'PONTOS EXPIRADOS'
                                                    ? <Icon name="minus" style={[styles.icon, styles.iconY]} />
                                                    : null
                                            }
                                        </View>
                                }
                                {
                                    data.Tipo == 'NOTA ESTORNADA' || data.Tipo == 'NOTA REJEITADA' || data.Tipo == 'NOTA INVÁLIDA' || data.Tipo == 'RESGATE ESTORNADO' || data.Tipo == 'PONTOS EXPIRADOS'
                                        ? <View style={[styles.pontos, { textAlign: 'center', flexDirection: 'column', alignItems: 'center' }]}>
                                            <Text style={styles.pontosDestaque}>{data.Tipo == 'PONTOS EXPIRADOS' ? "PONTOS EXPIRADOS" : "SEM PONTOS"}</Text>
                                            <Text style={styles.pontosDestaque}>{data.Tipo == 'PONTOS EXPIRADOS' ? `${data.Pontos} PONTOS` : "GERADOS"}</Text>
                                        </View>
                                        : <View style={[styles.pontos, { textAlign: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }]}>
                                            <Text style={styles.pontosInfo}>PONTOS [GERADOS/DEBITADOS]</Text>
                                            <Text style={styles.pontosDestaque}>{data.Pontos} PONTOS</Text>
                                        </View>
                                }

                            </View>
                            : null
                    }
                    {
                        data.Tipo == 'RESGATE DE RECOMPENSA'
                            ?
                            <View style={[styles.footerContainer,
                            {
                                backgroundColor: colors.cupomExtrato.bgFooterResgateRecompensa,
                                borderTopColor: colors.cupomExtrato.rowColor,
                                borderTopWidth: 1,
                                position: 'relative',
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }
                            ]}>
                                <View style={styles.vIcone}>
                                    {/*Icone Verde*/}
                                    {
                                        <Icon name="minus" style={[styles.icon, styles.iconG]} />
                                    }
                                </View>

                                <View style={[styles.pontos]}>
                                    <Text style={styles.pontosInfo}>PONTOS DEBITADOS</Text>
                                    <Text style={styles.pontosDestaque}>{data.Pontos} PONTOS</Text>
                                </View>

                            </View>
                            : null
                    }
                    {
                        data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == 'AGUARDANDO VALIDAÇÃO' || data.Tipo == 'NOTA CADASTRADA' || data.Tipo == 'BÔNUS POR ACESSO' || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO"
                            ?
                            <View style={[styles.footerContainer,
                            {
                                backgroundColor: colors.cupomExtrato.bgFooterBonusAcesso,
                                borderTopColor: colors.cupomExtrato.rowColor,
                                borderTopWidth: 1,
                                position: 'relative',
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                            }
                            ]}>
                                {
                                    data.Tipo == 'AGUARDANDO VALIDAÇÃO'
                                        ? null
                                        : <View style={styles.vIcone}>
                                            {/*Icone Verde*/}
                                            {
                                                data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == 'NOTA CADASTRADA' || data.Tipo == 'BÔNUS POR ACESSO' || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO"
                                                    ? <Icon name="plus" style={[styles.icon, styles.iconG2]} />
                                                    : null
                                            }
                                            {/*Icone Vermelho*/}
                                            {
                                                data.TipoDescricao == 'Resgate' && data.TipoDescricao == 'Nota estornada' && data.TipoDescricao == 'Nota Inválida'
                                                    ? <Icon name="plus" style={[styles.icon, styles.iconR]} />
                                                    : null
                                            }

                                        </View>
                                }
                                {
                                    data.Tipo == 'AGUARDANDO VALIDAÇÃO'
                                        ? <View style={[styles.pontos]}>
                                            <Text style={styles.pontosDestaque}>SEM PONTOS</Text>
                                            <Text style={styles.pontosDestaque}>GERADOS</Text>
                                        </View>
                                        : null
                                }
                                {
                                    data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO" || data.Tipo == 'NOTA CADASTRADA' || data.Tipo == 'BÔNUS POR ACESSO' || data.Tipo == "**BÔNUS POR ACESSO" || data.Tipo == "**BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "**PONTO EXTRA" || data.Tipo == "BÔNUS POR PRIMEIRO ACESSO" || data.Tipo == "CADASTRO COMPLETO" || data.Tipo == "BÔNUS POR ANIVERSÁRIO DO USUÁRIO"
                                        ? <View style={[styles.pontos]}>
                                            <Text style={styles.pontosInfo}>PONTOS GERADOS</Text>
                                            <Text style={styles.pontosDestaque}>{data.Pontos} PONTOS</Text>
                                        </View>
                                        : null
                                }
                            </View>
                            : null
                    }

                </View>
            </View>
        );
    }
}


export default extratoPontosDetalhes;
