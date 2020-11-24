import mongoose from 'mongoose';

const homeworkSchema = mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    due_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const homeworkSchema = mongoose.Schema(
  {
      course: {
          type: String,
          required: true,
      },
      title: {
          type: String,
          required: true,
      },
      due_date: {
          type: Date,
          required: true,
      },
      status: {
          type: String,
          required: true,
      },
  },
  {
      timestamp: true,
  }
);

const RuangMeeting = mongoose.model('RuangMeeting', homeworkSchema);
const Homework = mongoose.model('Homework', homeworkSchema);

export default RuangMeeting;
export default Homework;