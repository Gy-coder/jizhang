import React from "react";
import classnames from "classnames";
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
type Props = {
  name: string;
  type?: string;
  className?: string;
};
const Icon: React.FC<Props> = (props: Props) => {
  const iconClassName = classnames(
    "icon",
    props.type === "-" ? "red" : "blue",
    props.className
  );
  return (
    <svg className={iconClassName}>
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};

export { Icon };
