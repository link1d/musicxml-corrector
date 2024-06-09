import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.tsx?$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "MusicXML Corrector",
    }),
  ],
};
