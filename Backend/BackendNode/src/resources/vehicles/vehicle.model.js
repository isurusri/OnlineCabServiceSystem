import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
      trim: true,
      maxLength: 10,
    },
    status: {
      type: String,
      required: true,
      enum: ['available', 'occupied', 'offline'],
      default: 'available',
    },
    notes: String,
    branch: {
      type: mongoose.SchemaType.ObjectId,
      ref: 'branch',
      required: true,
    },
    driver: {
      type: mongoose.SchemaType.ObjectId,
      ref: 'driver',
    },
  },
  { timestamps: true }
)

vehicleSchema.index({ number: 1, driver: 1 }, { unique: true })

export const Vehicle = mongoose.model('vehicle', vehicleSchema)
