import { connect } from 'react-redux';
import { addToCart } from '../Services/Actions/actions'

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data))
})
export default connect(mapDispatchToProps, mapStateToProps)