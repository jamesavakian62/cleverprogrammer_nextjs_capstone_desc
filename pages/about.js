const About = () => {
    return (
      <>
        <h1>About Page</h1>
        <h4>Optical Automation, LLC Design studio generated this network using NextJS programming.</h4>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: "About" },
    };
  }
  
  export default About;