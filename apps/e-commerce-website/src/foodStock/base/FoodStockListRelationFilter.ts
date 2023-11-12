/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FoodStockWhereInput } from "./FoodStockWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FoodStockListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FoodStockWhereInput,
  })
  @ValidateNested()
  @Type(() => FoodStockWhereInput)
  @IsOptional()
  @Field(() => FoodStockWhereInput, {
    nullable: true,
  })
  every?: FoodStockWhereInput;

  @ApiProperty({
    required: false,
    type: () => FoodStockWhereInput,
  })
  @ValidateNested()
  @Type(() => FoodStockWhereInput)
  @IsOptional()
  @Field(() => FoodStockWhereInput, {
    nullable: true,
  })
  some?: FoodStockWhereInput;

  @ApiProperty({
    required: false,
    type: () => FoodStockWhereInput,
  })
  @ValidateNested()
  @Type(() => FoodStockWhereInput)
  @IsOptional()
  @Field(() => FoodStockWhereInput, {
    nullable: true,
  })
  none?: FoodStockWhereInput;
}
export { FoodStockListRelationFilter as FoodStockListRelationFilter };
