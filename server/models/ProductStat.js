import mongoose from "mongoose";


const ProductStatSchema = new mongoose.Schema(
    {
     productId: String,
    yearlSalesTotal: Number,
    yearlyTotalSoldUnity: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number
        }
    ],
    dailyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number
    }
    },
    { timestamps: true}
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;