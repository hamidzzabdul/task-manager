const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: [20, "A user name must have less or equal than 20 characters"],
            minlength: [3, "A user name must have more or equal than 3 characters"],            
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validator.isEmail, "Please provide a valid email"],
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Please enter a Password"],
            min: 8,
            max: 20,
            trim: true,
            select: false,
          },
          passwordConfirm: {
            type: String,
            required: [true, "Please enter a Password"],
            validate: {
              validator: function (el) {
                return el === this.password;
              },
              message: "Passwords are not the same",
            },
            trim: true,
          },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
    },
    { timestamps: true
    }
)


userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next();
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}



const User = mongoose.model("User", userSchema);

module.exports = User;