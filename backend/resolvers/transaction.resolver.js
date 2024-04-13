import Transaction from "../models/transaction.model.js";
const transactionResolver = {
  Query: {
    transactions: async (context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({ userId });
        return transactions;
      } catch (error) {
        console.log("Error getting transaction s:", err);
        throw new Error("Error getting transactions");
      }
    },

    transaction: async ({ transactionId }) => {
      try {
        const trasaction = await Transaction.findById(transactionId);
        return trasaction;
      } catch (error) {
        console.log("Error getting transaction :", err);
        throw new Error("Error getting transaction");
      }
    },
    //TODO=> add categoryStatistics query
  },
  Mutation: {
    createTransaction: async ({ input }, context) => {
      try {
        const newTransaction = new Transaction({
          ...input,
          userId: context.getUser._Id,
        });

        await newTransaction.save();
        return newTransaction;
      } catch (err) {
        console.log(`Error creating transaction: ${err}`);
        throw new Error("Error creating transaction");
      }
    },

    updateTransaction: async ({ input }) => {
      try {
        const updateTransaction = await Transaction.findByIdAndUpdate(
          input.transactionId,
          input,
          {
            new: true,
          }
        );
        return updateTransaction;
      } catch (error) {
        console.log(`Error updating transaction: ${err}`);
        throw new Error("Error updating transaction");
      }
    },

    deleteTransaction: async ({ transactionId }) => {
      try {
        const deletedTransaction = await Transaction.findByIdAndDelete(
          transactionId
        );
        return deletedTransaction;
      } catch (error) {
        console.log(`Error deleting transaction: ${err}`);
        throw new Error("Error deleting transaction");
      }
    },

    //TODO => ADD TRANSACTION/USER RELATIONSHIP
  },
};

export default transactionResolver;
