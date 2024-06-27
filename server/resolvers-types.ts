import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AddGoodsInput = {
  category: Scalars['Int']['input'];
  count: Scalars['Int']['input'];
  description_En: Scalars['String']['input'];
  description_Ua: Scalars['String']['input'];
  name_En: Scalars['String']['input'];
  name_Ua: Scalars['String']['input'];
  price_En: Scalars['String']['input'];
  price_Ua: Scalars['String']['input'];
  sale: Scalars['Int']['input'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int']['output'];
  isOnBar?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  name_En: Scalars['String']['output'];
  name_Ua: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Characteristic = {
  __typename?: 'Characteristic';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_En?: Maybe<Scalars['String']['output']>;
  name_Ua?: Maybe<Scalars['String']['output']>;
};

export type Goods = {
  __typename?: 'Goods';
  category: Category;
  categoryID: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  createDateTime: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  description_En: Scalars['String']['output'];
  description_Ua: Scalars['String']['output'];
  goodsCharacteristic?: Maybe<Array<Maybe<GoodsCharacteristic>>>;
  goodsUrlName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isShown: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  name_En: Scalars['String']['output'];
  name_Ua: Scalars['String']['output'];
  photo: Scalars['String']['output'];
  price: Scalars['String']['output'];
  price_En: Scalars['String']['output'];
  price_Ua: Scalars['String']['output'];
  sale: Scalars['Int']['output'];
};

export type GoodsCharacteristic = {
  __typename?: 'GoodsCharacteristic';
  characteristicId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_En?: Maybe<Scalars['String']['output']>;
  name_Ua?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  value_En?: Maybe<Scalars['String']['output']>;
  value_Ua?: Maybe<Scalars['String']['output']>;
};

export type GoodsInputChars = {
  characteristicId: Scalars['Int']['input'];
  value_En: Scalars['String']['input'];
  value_Ua: Scalars['String']['input'];
};

export type GoodsPage = {
  __typename?: 'GoodsPage';
  count?: Maybe<Scalars['Int']['output']>;
  goods?: Maybe<Array<Maybe<Goods>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Scalars['String']['output'];
  addGoods: Scalars['String']['output'];
  addShelf: Scalars['String']['output'];
  updateGoods: Scalars['String']['output'];
};


export type MutationAddCategoryArgs = {
  isOnBar: Scalars['Boolean']['input'];
  name_En: Scalars['String']['input'];
  name_Ua: Scalars['String']['input'];
};


export type MutationAddGoodsArgs = {
  chars?: InputMaybe<Array<InputMaybe<GoodsInputChars>>>;
  data: AddGoodsInput;
  img?: InputMaybe<Scalars['Upload']['input']>;
};


export type MutationAddShelfArgs = {
  goods: Scalars['String']['input'];
  name_En: Scalars['String']['input'];
  name_Ua: Scalars['String']['input'];
};


export type MutationUpdateGoodsArgs = {
  chars?: InputMaybe<Array<InputMaybe<UpdateGoodsInputChars>>>;
  data: UpdateGoodsInput;
  img?: InputMaybe<Scalars['Upload']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getAllGoods?: Maybe<GoodsPage>;
  getBarCategory?: Maybe<Array<Maybe<Category>>>;
  getCategories?: Maybe<Array<Maybe<Category>>>;
  getCharacteristic?: Maybe<Array<Maybe<Characteristic>>>;
  getGoodsByCategory?: Maybe<GoodsPage>;
  getGoodsByCategoryName?: Maybe<GoodsPage>;
  getGoodsById?: Maybe<Goods>;
  getGoodsByIds?: Maybe<Array<Maybe<Goods>>>;
  getGoodsByName?: Maybe<GoodsPage>;
  getGoodsByUrl?: Maybe<Goods>;
  getShelves?: Maybe<Array<Maybe<Shelf>>>;
};


export type QueryGetAllGoodsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGoodsByCategoryArgs = {
  category: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGoodsByCategoryNameArgs = {
  categoryName: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGoodsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetGoodsByIdsArgs = {
  ids: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type QueryGetGoodsByNameArgs = {
  name: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetGoodsByUrlArgs = {
  url: Scalars['String']['input'];
};

export type Shelf = {
  __typename?: 'Shelf';
  goods?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  name_En: Scalars['String']['output'];
  name_Ua: Scalars['String']['output'];
};

export type UpdateGoodsInput = {
  category?: InputMaybe<Scalars['Int']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  description_En?: InputMaybe<Scalars['String']['input']>;
  description_Ua?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name_En?: InputMaybe<Scalars['String']['input']>;
  name_Ua?: InputMaybe<Scalars['String']['input']>;
  price_En?: InputMaybe<Scalars['String']['input']>;
  price_Ua?: InputMaybe<Scalars['String']['input']>;
  sale?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateGoodsInputChars = {
  characteristicId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  value_En: Scalars['String']['input'];
  value_Ua: Scalars['String']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddGoodsInput: AddGoodsInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  Characteristic: ResolverTypeWrapper<Characteristic>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Goods: ResolverTypeWrapper<Goods>;
  GoodsCharacteristic: ResolverTypeWrapper<GoodsCharacteristic>;
  GoodsInputChars: GoodsInputChars;
  GoodsPage: ResolverTypeWrapper<GoodsPage>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Shelf: ResolverTypeWrapper<Shelf>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  updateGoodsInput: UpdateGoodsInput;
  updateGoodsInputChars: UpdateGoodsInputChars;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddGoodsInput: AddGoodsInput;
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  Characteristic: Characteristic;
  DateTime: Scalars['DateTime']['output'];
  Goods: Goods;
  GoodsCharacteristic: GoodsCharacteristic;
  GoodsInputChars: GoodsInputChars;
  GoodsPage: GoodsPage;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Shelf: Shelf;
  String: Scalars['String']['output'];
  Upload: Scalars['Upload']['output'];
  updateGoodsInput: UpdateGoodsInput;
  updateGoodsInputChars: UpdateGoodsInputChars;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isOnBar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_En?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_Ua?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacteristicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Characteristic'] = ResolversParentTypes['Characteristic']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_En?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_Ua?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GoodsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Goods'] = ResolversParentTypes['Goods']> = ResolversObject<{
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  categoryID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createDateTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description_En?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description_Ua?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  goodsCharacteristic?: Resolver<Maybe<Array<Maybe<ResolversTypes['GoodsCharacteristic']>>>, ParentType, ContextType>;
  goodsUrlName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isShown?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_En?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_Ua?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price_En?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price_Ua?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sale?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoodsCharacteristicResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoodsCharacteristic'] = ResolversParentTypes['GoodsCharacteristic']> = ResolversObject<{
  characteristicId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_En?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_Ua?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_En?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value_Ua?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoodsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoodsPage'] = ResolversParentTypes['GoodsPage']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goods?: Resolver<Maybe<Array<Maybe<ResolversTypes['Goods']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addCategory?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAddCategoryArgs, 'isOnBar' | 'name_En' | 'name_Ua'>>;
  addGoods?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAddGoodsArgs, 'data'>>;
  addShelf?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAddShelfArgs, 'goods' | 'name_En' | 'name_Ua'>>;
  updateGoods?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateGoodsArgs, 'data'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllGoods?: Resolver<Maybe<ResolversTypes['GoodsPage']>, ParentType, ContextType, Partial<QueryGetAllGoodsArgs>>;
  getBarCategory?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  getCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  getCharacteristic?: Resolver<Maybe<Array<Maybe<ResolversTypes['Characteristic']>>>, ParentType, ContextType>;
  getGoodsByCategory?: Resolver<Maybe<ResolversTypes['GoodsPage']>, ParentType, ContextType, RequireFields<QueryGetGoodsByCategoryArgs, 'category'>>;
  getGoodsByCategoryName?: Resolver<Maybe<ResolversTypes['GoodsPage']>, ParentType, ContextType, RequireFields<QueryGetGoodsByCategoryNameArgs, 'categoryName'>>;
  getGoodsById?: Resolver<Maybe<ResolversTypes['Goods']>, ParentType, ContextType, RequireFields<QueryGetGoodsByIdArgs, 'id'>>;
  getGoodsByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Goods']>>>, ParentType, ContextType, RequireFields<QueryGetGoodsByIdsArgs, 'ids'>>;
  getGoodsByName?: Resolver<Maybe<ResolversTypes['GoodsPage']>, ParentType, ContextType, RequireFields<QueryGetGoodsByNameArgs, 'name'>>;
  getGoodsByUrl?: Resolver<Maybe<ResolversTypes['Goods']>, ParentType, ContextType, RequireFields<QueryGetGoodsByUrlArgs, 'url'>>;
  getShelves?: Resolver<Maybe<Array<Maybe<ResolversTypes['Shelf']>>>, ParentType, ContextType>;
}>;

export type ShelfResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shelf'] = ResolversParentTypes['Shelf']> = ResolversObject<{
  goods?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_En?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_Ua?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Category?: CategoryResolvers<ContextType>;
  Characteristic?: CharacteristicResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Goods?: GoodsResolvers<ContextType>;
  GoodsCharacteristic?: GoodsCharacteristicResolvers<ContextType>;
  GoodsPage?: GoodsPageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shelf?: ShelfResolvers<ContextType>;
  Upload?: GraphQLScalarType;
}>;

