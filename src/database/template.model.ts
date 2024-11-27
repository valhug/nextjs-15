import { model, models, Schema, /* Types  */} from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IModel {

}

const ModelSchema = new Schema<IModel>({}, {timestamps: true});

const Model = models.Account || model<IModel>('Account', ModelSchema);

export default Model;