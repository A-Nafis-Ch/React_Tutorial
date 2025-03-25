import React from 'react';

const Info = [
    {

        Name: 'Nafis',
        Id: '123',
        Contact: [

            { home: '123' },
            { office: '456' },
        ],


    },
    {

        Name: 'Rocky',
        Id: '311',
        Contact: [

            { home: '654' },
            { office: '343' },
        ],


    },
    {

        Name: 'Saleh',
        Id: '111',
        Contact: [

            { home: '153' },
            { office: '546' },
        ],


    },
    {

        Name: 'Nasa',
        Id: '666',
        Contact: [

            { home: '908' },
            { office: '765' },
        ],


    }



];

const NestedMap = () => {


    return (<div>

        {Info.map((eachInfo) => {

            return (
                <div>

                    <h2>Name: {eachInfo.Name}</h2>
                    <h2>Id: {eachInfo.Id}</h2>
                    {
                        eachInfo.Contact.map((phone) => {

                            return (

                                <div>
                                    <p>{phone.home}</p>
                                    <p> {phone.office}</p>
                                </div>
                            );
                        })
                    }
                </div>
            );
        })}





    </div>
    );
}

export default NestedMap;