import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MsgSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: { type: Date, default: Date.now }
});

const Msg = mongoose.model('Msg', MsgSchema);

export default Msg;