const PageContainer = ({title, children})=> {
    return (
        <div className="main">
            <h2>{title}</h2>
            <div className="content">
                {children}
            </div>
        </div>
    )
};

export default PageContainer;