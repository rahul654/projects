import express, { Request, Response, NextFunction } from "express";
import { Todo } from "../db-init/models/todo";
import { checkRequireAndType } from "../utils/check-require-and-type";

const router = express.Router();

router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await Todo.find().exec();
      if(!result || !result.length){
        // either use throw or return res, cant use directly res, function will go to another res return inside this func
        return res.status(400).json({
          status: 400,
          data: [],
        });
      }
 
      res.status(200).json({
        status: 200,
        data: result,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);


router.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {title, description, completed} = req.body;

      // if mentioned properties is not available then it will throw error with, specifoed message, which will be intercepted by the error middleware
      checkRequireAndType({
        allTypeAndValue: [
          {
            forValue: "title in request body",
            value: title,
            type: 'string',
          },
          {
            forValue: "description in request body",
            value: description,
            type: 'string',
          },
          {
            forValue: "completed in request body",
            value: completed,
            type: 'boolean',
          },
        ]
      });

      const todo = new Todo({
        title,
        description,
        completed,
      });

      const result = await todo.save()
 
      res.status(200).json({
        status: 200,
        data: result,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);


router.put(
  "/:todoId?",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {title, description, completed} = req.body;
      const todoId = req?.params?.todoId;
      checkRequireAndType({
        allTypeAndValue: [
          {
            forValue: "todoId in url params",
            value: todoId,
            type: 'string',
          },
          {
            forValue: "title in request body",
            value: title,
            type: 'string',
          },
          {
            forValue: "description in request body",
            value: description,
            type: 'string',
          },
          {
            forValue: "completed in request body",
            value: completed,
            type: 'boolean',
          },
        ]
      })

      const result = await Todo.findOneAndUpdate(
        { _id: todoId },
        {
          $set: {
            title,
            description,
            completed,
          },
        },
        { new: true }
      );

      res.status(200).json({
        status: 200,
        data: result,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);


router.delete(
  "/:todoId?",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId = req?.params?.todoId;
      checkRequireAndType({
        allTypeAndValue: [
          {
            forValue: "todoId in url params",
            value: todoId,
            type: 'string',
          }
        ]
      });

      await Todo.deleteOne({ _id: todoId });

      res.status(200).json({
        status: 200,
        data: `deleted todo`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);


export default router