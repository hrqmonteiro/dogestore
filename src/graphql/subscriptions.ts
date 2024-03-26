/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    id
    name
    price
    description
    image
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    categoryProductsId
    cartProductsId
    productCategoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    id
    name
    price
    description
    image
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    categoryProductsId
    cartProductsId
    productCategoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    id
    name
    price
    description
    image
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    categoryProductsId
    cartProductsId
    productCategoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
    id
    name
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
    id
    name
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
    id
    name
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateCart = /* GraphQL */ `subscription OnCreateCart(
  $filter: ModelSubscriptionCartFilterInput
  $owner: String
) {
  onCreateCart(filter: $filter, owner: $owner) {
    id
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart(
  $filter: ModelSubscriptionCartFilterInput
  $owner: String
) {
  onUpdateCart(filter: $filter, owner: $owner) {
    id
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart(
  $filter: ModelSubscriptionCartFilterInput
  $owner: String
) {
  onDeleteCart(filter: $filter, owner: $owner) {
    id
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
