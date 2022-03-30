import ProtoTypes from 'prop-types'
function Item({marca, ano_lancamento}){
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}


Item.ProtoTypes = {
    marca: ProtoTypes.string.isRequired,
    ano_lancamento: ProtoTypes.number
}

Item.defaultProps = {
    marca:" Faltou a marca",
    ano_lancamento: 0
}
export default Item