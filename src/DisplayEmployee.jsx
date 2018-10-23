import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <ul>
                <li>Character : {employee.character}</li>
                <li>Quote : {employee.quote}</li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;

