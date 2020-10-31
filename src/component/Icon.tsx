import React from 'react';
import classnames from 'classnames'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}
type Props = {
  name: string;
  type?:string
}
const Icon:React.FC<Props> = (props: Props) => {
  const iconClassName = classnames("icon",props.type === '-' ? 'red' : 'blue')
  return (
    <svg className={iconClassName}>
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};


export {Icon};