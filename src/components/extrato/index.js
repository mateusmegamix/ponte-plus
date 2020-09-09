import React, { Component } from 'react'
import { Text, View, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import stylesExtratoPontos from '../../pages/meusPontos/stylesExtratoPontos';
import colors from '../../styles/colors';

class ListExtrato extends React.PureComponent {

    renderizaIcones = (_dataDoIcone, _tipoDoIconeFont, _corDoIcone, _styleDoIcone) => {
        return (
            _dataDoIcone
                ? <Icon name={_tipoDoIconeFont} color={_corDoIcone} style={_styleDoIcone} />
                : null
        )
    }

    render() {
        const { data, navigation, homeContext } = this.props;

        // codigoTipo
        // 2 : Ponto de Bônus
        const dataIcones = {
            menos: data.Tipo === "NOTA ESTORNADA" || data.Tipo === "RESGATE" || data.Tipo === "RESGATE DE RECOMPENSA" || data.Tipo === "PONTOS EXPIRADOS",
            mais: data.Tipo === "NOTA CADASTRADA" || data.Tipo === "RESGATE ESTORNADO" || data.CodigoTipo === 2,
            exclamacao: data.Tipo === "AGUARDANDO VALIDAÇÃO" || data.Tipo === "NOTA INVÁLIDA"
        }

        return (
            <View style={{
                backgroundColor: '#fff',
                paddingTop: 10,
                marginBottom: -10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10
            }}>
                <TouchableOpacity style={stylesExtratoPontos.item} onPress={() => { homeContext.setModalVisible(data); }}>
                    {
                        this.renderizaIcones(dataIcones.menos, "minus", colors.gray, stylesExtratoPontos.iconItem)
                    }
                    {
                        this.renderizaIcones(dataIcones.mais, "plus", colors.gray, stylesExtratoPontos.iconItem)
                    }
                    {
                        this.renderizaIcones(dataIcones.exclamacao, "exclamation", colors.gray, stylesExtratoPontos.iconItem)
                    }
                    {
                        data.Pontos == 0
                            ? null
                            : null
                    }
                    <View style={stylesExtratoPontos.dadosItem}>
                        <Text style={stylesExtratoPontos.dataItem}>
                            {data.DataExtenso}
                        </Text>
                        <Text style={stylesExtratoPontos.statusItem}>
                            {data.Tipo}
                        </Text>
                        {
                            data.Tipo == 'BÔNUS POR ANIVERSÁRIO DO USUÁRIO' || data.Tipo == 'AGUARDANDO VALIDAÇÃO' || data.Tipo == 'BÔNUS POR ACESSO' || data.Tipo == 'NOTA CADASTRADA' || data.Tipo == 'PONTOS EXPIRADOS'
                                ? null
                                : <Text style={stylesExtratoPontos.msgItem}>
                                    {data.Descricao}
                                </Text>
                        }
                    </View>

                    <View style={stylesExtratoPontos.ptsItem}>
                        {
                            data.Tipo == 'AGUARDANDO VALIDAÇÃO' || data.Tipo == 'NOTA REJEITADA'
                                ? null
                                : <View>
                                    {
                                        data.Tipo == 'NOTA REJEITADA' || data.Tipo == 'NOTA INVÁLIDA' || data.Tipo == 'NOTA ESTORNADA'
                                            ? null
                                            : <Text style={stylesExtratoPontos.pts}>{data.Pontos} PTS</Text>
                                    }
                                </View>
                        }

                        <Icon name="info-circle" size={17} style={stylesExtratoPontos.iconItem} />
                    </View>
                </TouchableOpacity>
                <View style={stylesExtratoPontos.borderItens}></View>
            </View>

        )
    }
}

export default ListExtrato