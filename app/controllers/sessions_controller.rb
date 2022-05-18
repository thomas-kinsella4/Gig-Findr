class SessionsController < ApplicationController

    def create
        agent = Agent.find_by(username: params[:username])
        if agent&.authenticate(params[:password])
            session[:agent_id] = agent.id
            render json: agent, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
end
