exports.successfullReturns = async (req, res, data) => {
    try {
        return res.status(200).json({ 
            data
        });
        
    } catch(err) {
        console.log(err)
    }
}