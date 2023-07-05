#[starknet::contract]
mod HelloStarknet {
    use starknet::get_caller_address;
    use starknet::ContractAddress;

    #[storage]
    struct Storage {
        counter: u128
    }

    #[external(v0)]
      fn get_counter(self: @ContractState) -> u128 { 
        let current = self.counter.read();
        return current;
      }
}
