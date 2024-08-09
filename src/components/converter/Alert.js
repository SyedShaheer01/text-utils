import Alert from 'react-bootstrap/Alert';
// import App from '../../App';


function Banner(props) {

    const Captilizi=(word)=>{

        let lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <>
      {[
       'primary'
       
      ].map((variant) => (
        props.alert && <Alert key={variant} variant={variant}>
         <strong>{Captilizi( props.alert.type)}:  {props.alert.msg}</strong>
        </Alert>
      ))}
    </>
  );
}

export default Banner;