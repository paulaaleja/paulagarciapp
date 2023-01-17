import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import OrderItem from "../components/OrderItem";
import { getOrders } from "../store/actions/order.action";

const OrdersScreen = () => {
const dispatch = useDispatch();
const orders = useSelector(state => state.orders.list)

    useEffect(()=>{
         dispatch(getOrders());
    }, []);

    const handleDeleteItem = () => {
        console.log("deleted");
    }
    const renderItem = ({item}) =>(
        <OrderItem item={item} onDelete={handleDeleteItem}/>
    );

    return (
        <View style={styles.container}>
            <FlatList
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}

            />
        </View>
    )
};

export default connect()(OrdersScreen);

const styles = StyleSheet.create({
   container: {
        flex: 1,
        padding: 12,
        backgroundColor: "#fff",
        paddingBottom: 120,
   }
});