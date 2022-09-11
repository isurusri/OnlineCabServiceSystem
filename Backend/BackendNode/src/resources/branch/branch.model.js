/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'

const branchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        status: {
            type: String,
            required: true,
            enum: ['active', 'closed'],
            default: 'active',
        },
        location: {
            type: String,
            required: true,
            maxlength: 200,
        },
        drivers: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'driver'
        }],
        vehicles: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'vehicle'
        }]
    },
    { timestamps: true }
)

export const Branch = mongoose.model('branch', branchSchema)
