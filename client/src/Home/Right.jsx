import React from 'react';

const Right = () => {
    return (
        <div
            style={{
                backgroundColor: 'red',
                height: '100%',
                padding: '20px',
                borderRadius: '10px',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1
                    style={{
                        color: '#fff',
                        border: '2px solid #ddd',
                        padding: '10px',
                        borderRadius: '5px',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                    }}
                >
                    Spark
                </h1>
            </div>

            {/* Information Section */}
            <div
                style={{
                    border: '1px solid #ddd',
                    padding: '10px',
                    borderRadius: '5px',
                    marginBottom: '20px',
                    textAlign:'center'
                }}
            >
                <p style={{ margin: '0', fontSize: '1rem', fontWeight: 'lighter' }}>
                    Learn more about air drive on
                </p>
                <h2 style={{ margin: '1px 0', fontSize: '1.5rem' }}>Spark.Pl</h2>
            </div>

            {/* Footer Links Section */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    borderTop: '1px solid #ddd',
                    paddingTop: '10px',
                }}
            >
                <p style={{ margin: '0', cursor: 'pointer' }}>License</p>
                <p style={{ margin: '0', cursor: 'pointer' }}>Terms of Use</p>
                <p style={{ margin: '0', cursor: 'pointer' }}>Blog</p>
            </div>
        </div>
    );
};

export default Right;
