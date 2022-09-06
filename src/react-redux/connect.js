/**
 *  接收store，渲染children
 */
import ReactReduxContext from "./ReactReduxContext";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return function (props) {
      return (
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Component
              {...props}
              {...mapStateToProps(store.getState())}
              {...mapDispatchToProps(store.dispatch)}
            />
          )}
        </ReactReduxContext.Consumer>
      );
    };
  };
}
