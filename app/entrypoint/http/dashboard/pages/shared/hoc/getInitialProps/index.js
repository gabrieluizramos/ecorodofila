const getInitialProps = async (component, ctx) => {
  const componentProps = component.getInitialProps && (await component.getInitialProps(ctx));

  return componentProps;
};

export default getInitialProps;
